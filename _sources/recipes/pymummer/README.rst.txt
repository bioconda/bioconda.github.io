:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymummer'
.. highlight: bash

pymummer
========

.. conda:recipe:: pymummer
   :replaces_section_title:
   :noindex:

   Wrapper for MUMmer

   :homepage: https://github.com/sanger-pathogens/pymummer
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`pymummer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymummer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymummer/meta.yaml>`_

   


.. conda:package:: pymummer

   |downloads_pymummer| |docker_pymummer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.0-1</code>,  <code>0.11.0-0</code>,  <code>0.10.3-2</code>,  <code>0.10.3-1</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-2</code>,  <code>0.10.1-1</code>,  <code>0.10.1-0</code>,  </span></summary>
      

      ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.3-2``,  ``0.10.3-1``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-2``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.6.1-1``,  ``0.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends mummer: 
   :depends pyfastaq: ``>=3.10.0``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymummer

   and update with::

      conda update pymummer

   or use the docker container::

      docker pull quay.io/biocontainers/pymummer:<tag>

   (see `pymummer/tags`_ for valid values for ``<tag>``)


.. |downloads_pymummer| image:: https://img.shields.io/conda/dn/bioconda/pymummer.svg?style=flat
   :target: https://anaconda.org/bioconda/pymummer
   :alt:   (downloads)
.. |docker_pymummer| image:: https://quay.io/repository/biocontainers/pymummer/status
   :target: https://quay.io/repository/biocontainers/pymummer
.. _`pymummer/tags`: https://quay.io/repository/biocontainers/pymummer?tab=tags


.. raw:: html

    <script>
        var package = "pymummer";
        var versions = ["0.11.0","0.11.0","0.10.3","0.10.3","0.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymummer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymummer/README.html