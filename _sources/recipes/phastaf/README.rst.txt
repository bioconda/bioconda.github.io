:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phastaf'
.. highlight: bash

phastaf
=======

.. conda:recipe:: phastaf
   :replaces_section_title:
   :noindex:

   Identify phage regions in bacterial genomes for masking purposes

   :homepage: https://github.com/tseemann/phastaf
   :license: GPL / GPLv3
   :recipe: /`phastaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phastaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phastaf/meta.yaml>`_

   


.. conda:package:: phastaf

   |downloads_phastaf| |docker_phastaf|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on any2fasta: ``>=0.4``
   :depends on bedtools: ``>=2.0``
   :depends on coreutils: 
   :depends on diamond: ``>=0.9``
   :depends on perl: 

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

    pixi global install phastaf

to add into an existing workspace instead, run::

    pixi add phastaf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phastaf

Alternatively, to install into a new environment, run::

    conda create -n envname phastaf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phastaf:<tag>

(see `phastaf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phastaf| image:: https://img.shields.io/conda/dn/bioconda/phastaf.svg?style=flat
   :target: https://anaconda.org/bioconda/phastaf
   :alt:   (downloads)
.. |docker_phastaf| image:: https://quay.io/repository/biocontainers/phastaf/status
   :target: https://quay.io/repository/biocontainers/phastaf
.. _`phastaf/tags`: https://quay.io/repository/biocontainers/phastaf?tab=tags


.. raw:: html

    <script>
        var package = "phastaf";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phastaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phastaf/README.html