:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ebi-eva-common-pyutils'
.. highlight: bash

ebi-eva-common-pyutils
======================

.. conda:recipe:: ebi-eva-common-pyutils
   :replaces_section_title:
   :noindex:

   EBI EVA \- Common Python Utilities.

   :homepage: https://github.com/EBIVariation/eva-common-pyutils
   :license: APACHE / Apache-2.0
   :recipe: /`ebi-eva-common-pyutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebi-eva-common-pyutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebi-eva-common-pyutils/meta.yaml>`_

   


.. conda:package:: ebi-eva-common-pyutils

   |downloads_ebi-eva-common-pyutils| |docker_ebi-eva-common-pyutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.16-0</code>,  <code>0.6.14-0</code>,  <code>0.6.12-0</code>,  </span></summary>
      

      ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.16-0``,  ``0.6.14-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends cached-property: 
   :depends lxml: ``5.*``
   :depends openpyxl: ``3.*``
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :depends retry: 
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

      mamba install ebi-eva-common-pyutils

   and update with::

      mamba update ebi-eva-common-pyutils

  To create a new environment, run::

      mamba create --name myenvname ebi-eva-common-pyutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ebi-eva-common-pyutils:<tag>

   (see `ebi-eva-common-pyutils/tags`_ for valid values for ``<tag>``)


.. |downloads_ebi-eva-common-pyutils| image:: https://img.shields.io/conda/dn/bioconda/ebi-eva-common-pyutils.svg?style=flat
   :target: https://anaconda.org/bioconda/ebi-eva-common-pyutils
   :alt:   (downloads)
.. |docker_ebi-eva-common-pyutils| image:: https://quay.io/repository/biocontainers/ebi-eva-common-pyutils/status
   :target: https://quay.io/repository/biocontainers/ebi-eva-common-pyutils
.. _`ebi-eva-common-pyutils/tags`: https://quay.io/repository/biocontainers/ebi-eva-common-pyutils?tab=tags


.. raw:: html

    <script>
        var package = "ebi-eva-common-pyutils";
        var versions = ["0.8.1","0.8.0","0.7.4","0.7.3","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ebi-eva-common-pyutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ebi-eva-common-pyutils/README.html