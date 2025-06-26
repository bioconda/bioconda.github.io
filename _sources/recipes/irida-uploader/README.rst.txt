:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irida-uploader'
.. highlight: bash

irida-uploader
==============

.. conda:recipe:: irida-uploader
   :replaces_section_title:
   :noindex:

   Upload NGS data to IRIDA system.

   :homepage: https://github.com/phac-nml/irida-uploader
   :documentation: https://irida-uploader.readthedocs.io/en/latest
   
   :license: APACHE / Apache-2.0
   :recipe: /`irida-uploader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-uploader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-uploader/meta.yaml>`_

   


.. conda:package:: irida-uploader

   |downloads_irida-uploader| |docker_irida-uploader|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.5-0</code>,  <code>0.9.4-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.0-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  </span></summary>
      

      ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: 
   :depends cerberus: 
   :depends chardet: 
   :depends python: ``>=3.7``
   :depends rauth: 
   :depends requests: 
   :depends requests-toolbelt: 
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

      mamba install irida-uploader

   and update with::

      mamba update irida-uploader

  To create a new environment, run::

      mamba create --name myenvname irida-uploader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/irida-uploader:<tag>

   (see `irida-uploader/tags`_ for valid values for ``<tag>``)


.. |downloads_irida-uploader| image:: https://img.shields.io/conda/dn/bioconda/irida-uploader.svg?style=flat
   :target: https://anaconda.org/bioconda/irida-uploader
   :alt:   (downloads)
.. |docker_irida-uploader| image:: https://quay.io/repository/biocontainers/irida-uploader/status
   :target: https://quay.io/repository/biocontainers/irida-uploader
.. _`irida-uploader/tags`: https://quay.io/repository/biocontainers/irida-uploader?tab=tags


.. raw:: html

    <script>
        var package = "irida-uploader";
        var versions = ["0.9.5","0.9.4","0.9.3","0.9.2","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irida-uploader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irida-uploader/README.html