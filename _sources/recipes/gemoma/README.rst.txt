:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gemoma'
.. highlight: bash

gemoma
======

.. conda:recipe:: gemoma
   :replaces_section_title:
   :noindex:

   Gene Model Mapper \(GeMoMa\) is a homology\-based gene prediction program.
   GeMoMa uses the annotation of protein\-coding genes in a reference genome to infer the annotation of protein\-coding genes in a target genome.
   Thereby\, GeMoMa utilizes amino acid sequence and intron position conservation.
   In addition\, GeMoMa allows to incorporate RNA\-seq evidence for splice site prediction.


   :homepage: http://www.jstacs.de/index.php/GeMoMa
   :license: GPL3
   :recipe: /`gemoma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemoma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemoma/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw092`, doi: :doi:`10.1186/s12859-018-2203-5`

   


.. conda:package:: gemoma

   |downloads_gemoma| |docker_gemoma|

   :versions:
      
      

      ``1.9-0``,  ``1.7.1-0``,  ``1.6.4-1``,  ``1.6.4-0``

      

   
   :depends on blast: ``>=2.12.0``
   :depends on mmseqs2: ``>=14.7e284``
   :depends on openjdk: ``>=8,<12``
   :depends on python: ``>=3.7``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install gemoma

to add into an existing workspace instead, run::

    pixi add gemoma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gemoma

Alternatively, to install into a new environment, run::

    conda create -n envname gemoma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gemoma:<tag>

(see `gemoma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gemoma| image:: https://img.shields.io/conda/dn/bioconda/gemoma.svg?style=flat
   :target: https://anaconda.org/bioconda/gemoma
   :alt:   (downloads)
.. |docker_gemoma| image:: https://quay.io/repository/biocontainers/gemoma/status
   :target: https://quay.io/repository/biocontainers/gemoma
.. _`gemoma/tags`: https://quay.io/repository/biocontainers/gemoma?tab=tags


.. raw:: html

    <script>
        var package = "gemoma";
        var versions = ["1.9","1.7.1","1.6.4","1.6.4"];
    </script>





Notes
-----
GeMoMa is Java program that comes with a custom wrapper python script. By default
\"\-Xms3g \-Xmx6g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gemoma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gemoma/README.html