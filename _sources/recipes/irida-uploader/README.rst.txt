:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irida-uploader'
.. highlight: bash

irida-uploader
==============

.. conda:recipe:: irida-uploader
   :replaces_section_title:
   :noindex:

   Upload NGS data to IRIDA system

   :homepage: https://github.com/phac-nml/irida-uploader
   :documentation: https://irida-uploader.readthedocs.io/en/latest
   
   :license: APACHE / Apache-2.0
   :recipe: /`irida-uploader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-uploader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-uploader/meta.yaml>`_

   


.. conda:package:: irida-uploader

   |downloads_irida-uploader| |docker_irida-uploader|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.2-1</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  </span></summary>
      

      ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: ``>=1.4.3``
   :depends argparse: 
   :depends cerberus: 
   :depends python: ``>=3.5.*``
   :depends rauth: ``>=0.7.3``
   :depends requests: ``>=2.21.0``
   :depends requests-toolbelt: ``>=0.9.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install irida-uploader

   and update with::

      conda update irida-uploader

   or use the docker container::

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
        var versions = ["0.7.1","0.7.0","0.6.2","0.6.2","0.6.1"];
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