:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispresso'
.. highlight: bash

crispresso
==========

.. conda:recipe:: crispresso
   :replaces_section_title:
   :noindex:

   A software pipeline for the analysis of targeted CRISPR\-Cas9 sequencing data

   :homepage: https://github.com/lucapinello/CRISPResso
   :license: GPLv3
   :recipe: /`crispresso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso/meta.yaml>`_

   


.. conda:package:: crispresso

   |downloads_crispresso| |docker_crispresso|

   :versions:
      
      

      ``1.0.13-5``,  ``1.0.13-4``,  ``1.0.13-3``,  ``1.0.13-2``,  ``1.0.13-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0-0``

      

   
   :depends on argparse: 
   :depends on biopython: ``>=1.6.5``
   :depends on bowtie2: 
   :depends on emboss: 
   :depends on flash: 
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on matplotlib: ``>=1.3.1``
   :depends on mock: 
   :depends on nose: 
   :depends on numpy: ``>=1.10.4``
   :depends on openjdk: ``>=8``
   :depends on pandas: ``>=0.16``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on samtools: 
   :depends on seaborn: 
   :depends on trimmomatic: 

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

    pixi global install crispresso

to add into an existing workspace instead, run::

    pixi add crispresso

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crispresso

Alternatively, to install into a new environment, run::

    conda create -n envname crispresso

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crispresso:<tag>

(see `crispresso/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crispresso| image:: https://img.shields.io/conda/dn/bioconda/crispresso.svg?style=flat
   :target: https://anaconda.org/bioconda/crispresso
   :alt:   (downloads)
.. |docker_crispresso| image:: https://quay.io/repository/biocontainers/crispresso/status
   :target: https://quay.io/repository/biocontainers/crispresso
.. _`crispresso/tags`: https://quay.io/repository/biocontainers/crispresso?tab=tags


.. raw:: html

    <script>
        var package = "crispresso";
        var versions = ["1.0.13","1.0.13","1.0.13","1.0.13","1.0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispresso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispresso/README.html