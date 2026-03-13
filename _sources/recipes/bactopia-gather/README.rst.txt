:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bactopia-gather'
.. highlight: bash

bactopia-gather
===============

.. conda:recipe:: bactopia-gather
   :replaces_section_title:
   :noindex:

   The methods used in Bactopia to gather all samples into one place

   :homepage: https://bactopia.github.io/
   :developer docs: https://github.com/bactopia/bactopia-gather/
   :license: MIT
   :recipe: /`bactopia-gather <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-gather>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-gather/meta.yaml>`_
   :links: biotools: :biotools:`bactopia`, doi: :doi:`10.1128/mSystems.00190-20`

   


.. conda:package:: bactopia-gather

   |downloads_bactopia-gather| |docker_bactopia-gather|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on art: ``>=2016.06.05``
   :depends on bbmap: ``>=39.01``
   :depends on biopython: ``1.77.*``
   :depends on coreutils: 
   :depends on fastq-dl: ``>=2.0.4``
   :depends on fastq-scan: ``>=1.0.1``
   :depends on gsl: ``2.6.*``
   :depends on mash: ``>=2.3``
   :depends on ncbi-genome-download: ``>=0.3.3``
   :depends on pigz: 
   :depends on python: ``>=3.8,<3.11``
   :depends on rename: 
   :depends on sed: 
   :depends on sra-tools: ``>=3.0.1``

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

    pixi global install bactopia-gather

to add into an existing workspace instead, run::

    pixi add bactopia-gather

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bactopia-gather

Alternatively, to install into a new environment, run::

    conda create -n envname bactopia-gather

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bactopia-gather:<tag>

(see `bactopia-gather/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bactopia-gather| image:: https://img.shields.io/conda/dn/bioconda/bactopia-gather.svg?style=flat
   :target: https://anaconda.org/bioconda/bactopia-gather
   :alt:   (downloads)
.. |docker_bactopia-gather| image:: https://quay.io/repository/biocontainers/bactopia-gather/status
   :target: https://quay.io/repository/biocontainers/bactopia-gather
.. _`bactopia-gather/tags`: https://quay.io/repository/biocontainers/bactopia-gather?tab=tags


.. raw:: html

    <script>
        var package = "bactopia-gather";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bactopia-gather/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bactopia-gather/README.html