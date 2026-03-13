:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hafez'
.. highlight: bash

hafez
=====

.. conda:recipe:: hafez
   :replaces_section_title:
   :noindex:

   A tool for identifying active prophage elements through read mapping

   :homepage: https://github.com/Chrisjrt/hafeZ
   :documentation: https://github.com/Chrisjrt/hafeZ/blob/master/README.md
   
   :developer docs: https://github.com/Chrisjrt/hafeZ/
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`hafez <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hafez>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hafez/meta.yaml>`_

   


.. conda:package:: hafez

   |downloads_hafez| |docker_hafez|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends on bbmap: ``>=38.90``
   :depends on biopython: ``>=1.78``
   :depends on blast: ``>=2.5.0``
   :depends on hhsuite: ``>=3.3.0``
   :depends on hmmer: ``>=3.3.2``
   :depends on matplotlib-base: ``>=3.3.4``
   :depends on minimap2: ``>=2.18``
   :depends on mosdepth: ``>=0.3.1``
   :depends on numpy: ``>=1.20.1``
   :depends on pandas: ``>=1.2.4``
   :depends on pyrodigal: ``>=0.4.7``
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: 
   :depends on sambamba: ``>=0.6.8``
   :depends on samtools: ``>=1.11``
   :depends on scipy: ``>=1.6.2``
   :depends on seaborn: ``>=0.11.1``

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

    pixi global install hafez

to add into an existing workspace instead, run::

    pixi add hafez

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hafez

Alternatively, to install into a new environment, run::

    conda create -n envname hafez

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hafez:<tag>

(see `hafez/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hafez| image:: https://img.shields.io/conda/dn/bioconda/hafez.svg?style=flat
   :target: https://anaconda.org/bioconda/hafez
   :alt:   (downloads)
.. |docker_hafez| image:: https://quay.io/repository/biocontainers/hafez/status
   :target: https://quay.io/repository/biocontainers/hafez
.. _`hafez/tags`: https://quay.io/repository/biocontainers/hafez?tab=tags


.. raw:: html

    <script>
        var package = "hafez";
        var versions = ["1.0.4","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hafez/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hafez/README.html