:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydnase'
.. highlight: bash

pydnase
=======

.. conda:recipe:: pydnase
   :replaces_section_title:
   :noindex:

   DNase\-seq analysis library

   :homepage: http://jpiper.github.io/pyDNase
   :documentation: http://pythonhosted.org/pyDNase/index.html
   
   :license: MIT / MIT
   :recipe: /`pydnase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydnase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydnase/meta.yaml>`_

   A suite of tools for analysing DNase\-seq data.


.. conda:package:: pydnase

   |downloads_pydnase| |docker_pydnase|

   :versions:
      
      

      ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.6-1``,  ``0.2.6-0``

      

   
   :depends bedtools: 
   :depends clint: 
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pydnase

   and update with::

      mamba update pydnase

  To create a new environment, run::

      mamba create --name myenvname pydnase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pydnase:<tag>

   (see `pydnase/tags`_ for valid values for ``<tag>``)


.. |downloads_pydnase| image:: https://img.shields.io/conda/dn/bioconda/pydnase.svg?style=flat
   :target: https://anaconda.org/bioconda/pydnase
   :alt:   (downloads)
.. |docker_pydnase| image:: https://quay.io/repository/biocontainers/pydnase/status
   :target: https://quay.io/repository/biocontainers/pydnase
.. _`pydnase/tags`: https://quay.io/repository/biocontainers/pydnase?tab=tags


.. raw:: html

    <script>
        var package = "pydnase";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydnase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydnase/README.html