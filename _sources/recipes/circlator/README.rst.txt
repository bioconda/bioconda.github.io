:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circlator'
.. highlight: bash

circlator
=========

.. conda:recipe:: circlator
   :replaces_section_title:
   :noindex:

   circlator\: a tool to circularise genome assemblies

   :homepage: https://github.com/sanger-pathogens/circlator
   :license: GPL / GNU General Public License v3 (GPLv3)
   :recipe: /`circlator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circlator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circlator/meta.yaml>`_

   


.. conda:package:: circlator

   |downloads_circlator| |docker_circlator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.5-3</code>,  <code>1.5.5-2</code>,  <code>1.5.5-1</code>,  <code>1.5.5-0</code>,  <code>1.5.2-1</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.5.5-3``,  ``1.5.5-2``,  ``1.5.5-1``,  ``1.5.5-0``,  ``1.5.2-1``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends amos: ``>=3.1.0``
   :depends bio_assembly_refinement: ``>=0.4.0``
   :depends bwa: 
   :depends canu: ``>=1.8``
   :depends mummer: ``>=3.23``
   :depends openpyxl: 
   :depends prodigal: 
   :depends pyfastaq: ``>=3.12.1``
   :depends pymummer: ``>=0.9.0``
   :depends pysam: ``>=0.8.1``
   :depends python: ``>=3``
   :depends samtools: 
   :depends spades: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install circlator

   and update with::

      mamba update circlator

  To create a new environment, run::

      mamba create --name myenvname circlator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/circlator:<tag>

   (see `circlator/tags`_ for valid values for ``<tag>``)


.. |downloads_circlator| image:: https://img.shields.io/conda/dn/bioconda/circlator.svg?style=flat
   :target: https://anaconda.org/bioconda/circlator
   :alt:   (downloads)
.. |docker_circlator| image:: https://quay.io/repository/biocontainers/circlator/status
   :target: https://quay.io/repository/biocontainers/circlator
.. _`circlator/tags`: https://quay.io/repository/biocontainers/circlator?tab=tags


.. raw:: html

    <script>
        var package = "circlator";
        var versions = ["1.5.5","1.5.5","1.5.5","1.5.5","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circlator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circlator/README.html