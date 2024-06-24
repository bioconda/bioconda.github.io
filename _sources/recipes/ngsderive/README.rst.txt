:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsderive'
.. highlight: bash

ngsderive
=========

.. conda:recipe:: ngsderive
   :replaces_section_title:
   :noindex:

   Backwards derive attributes from NGS data

   :homepage: https://github.com/stjudecloud/ngsderive
   :documentation: https://stjudecloud.github.io/ngsderive/
   
   :license: MIT / MIT
   :recipe: /`ngsderive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsderive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsderive/meta.yaml>`_

   


.. conda:package:: ngsderive

   |downloads_ngsderive| |docker_ngsderive|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.0-0</code>,  <code>3.3.2-0</code>,  <code>3.3.1-0</code>,  <code>3.3.0-0</code>,  <code>3.2.1-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.1-0</code>,  </span></summary>
      

      ``4.0.0-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends colorlog: ``>=6.6.0``
   :depends gtfparse: ``>=1.2.1``
   :depends pygtrie: ``>=2.5.0``
   :depends pysam: ``>=0.21``
   :depends pytabix: ``>=0.1``
   :depends python: ``>=3.8``
   :depends rstr: ``>=3.0.0``
   :depends sortedcontainers: ``>=2.4.0``
   :depends tabix: ``>=1.11``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ngsderive

   and update with::

      mamba update ngsderive

  To create a new environment, run::

      mamba create --name myenvname ngsderive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngsderive:<tag>

   (see `ngsderive/tags`_ for valid values for ``<tag>``)


.. |downloads_ngsderive| image:: https://img.shields.io/conda/dn/bioconda/ngsderive.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsderive
   :alt:   (downloads)
.. |docker_ngsderive| image:: https://quay.io/repository/biocontainers/ngsderive/status
   :target: https://quay.io/repository/biocontainers/ngsderive
.. _`ngsderive/tags`: https://quay.io/repository/biocontainers/ngsderive?tab=tags


.. raw:: html

    <script>
        var package = "ngsderive";
        var versions = ["4.0.0","3.3.2","3.3.1","3.3.0","3.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsderive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsderive/README.html