:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bactopia-teton'
.. highlight: bash

bactopia-teton
==============

.. conda:recipe:: bactopia-teton
   :replaces_section_title:
   :noindex:

   Methods used by Bactopia for taxonomic classification

   :homepage: https://bactopia.github.io/
   :developer docs: https://github.com/bactopia/bactopia-teton/
   :license: MIT
   :recipe: /`bactopia-teton <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-teton>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-teton/meta.yaml>`_
   :links: biotools: :biotools:`bactopia`, doi: :doi:`10.1128/mSystems.00190-20`

   


.. conda:package:: bactopia-teton

   |downloads_bactopia-teton| |docker_bactopia-teton|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bracken: ``>=2.8``
   :depends on coreutils: 
   :depends on fastq-scan: ``>=1.0.1``
   :depends on gsl: ``2.6.*``
   :depends on hostile: ``>=0.1.0``
   :depends on kraken2: ``>=2.1.3``
   :depends on krakentools: ``>=1.2``
   :depends on krona: ``>=2.8.1``
   :depends on pandas: 
   :depends on pigz: 
   :depends on python: ``>=3.6,<3.11``
   :depends on sed: 
   :depends on sizemeup: ``>=1.2.3``
   :depends on sra-human-scrubber: ``>=2.2``

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

    pixi global install bactopia-teton

to add into an existing workspace instead, run::

    pixi add bactopia-teton

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bactopia-teton

Alternatively, to install into a new environment, run::

    conda create -n envname bactopia-teton

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bactopia-teton:<tag>

(see `bactopia-teton/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bactopia-teton| image:: https://img.shields.io/conda/dn/bioconda/bactopia-teton.svg?style=flat
   :target: https://anaconda.org/bioconda/bactopia-teton
   :alt:   (downloads)
.. |docker_bactopia-teton| image:: https://quay.io/repository/biocontainers/bactopia-teton/status
   :target: https://quay.io/repository/biocontainers/bactopia-teton
.. _`bactopia-teton/tags`: https://quay.io/repository/biocontainers/bactopia-teton?tab=tags


.. raw:: html

    <script>
        var package = "bactopia-teton";
        var versions = ["1.1.1","1.1.0","1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bactopia-teton/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bactopia-teton/README.html