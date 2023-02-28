:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epic'
.. highlight: bash

epic
====

.. conda:recipe:: epic
   :replaces_section_title:
   :noindex:

   Chip\-Seq broad peak\/domain finder.

   :homepage: http://github.com/endrebak/epic
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`epic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic/meta.yaml>`_

   


.. conda:package:: epic

   |downloads_epic| |docker_epic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.12-7</code>,  <code>0.2.12-6</code>,  <code>0.2.12-5</code>,  <code>0.2.12-4</code>,  <code>0.2.12-3</code>,  <code>0.2.12-2</code>,  <code>0.2.12-1</code>,  <code>0.2.12-0</code>,  <code>0.2.9-1</code>,  </span></summary>
      

      ``0.2.12-7``,  ``0.2.12-6``,  ``0.2.12-5``,  ``0.2.12-4``,  ``0.2.12-3``,  ``0.2.12-2``,  ``0.2.12-1``,  ``0.2.12-0``,  ``0.2.9-1``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.28-0``,  ``0.1.27-0``,  ``0.1.26-0``,  ``0.1.25-0``,  ``0.1.24-0``,  ``0.1.20-0``,  ``0.1.17-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends docopt: 
   :depends functools32: 
   :depends joblib: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends pybigwig: 
   :depends pyfaidx: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scipy: 
   :depends typing: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install epic

   and update with::

      conda update epic

   or use the docker container::

      docker pull quay.io/biocontainers/epic:<tag>

   (see `epic/tags`_ for valid values for ``<tag>``)


.. |downloads_epic| image:: https://img.shields.io/conda/dn/bioconda/epic.svg?style=flat
   :target: https://anaconda.org/bioconda/epic
   :alt:   (downloads)
.. |docker_epic| image:: https://quay.io/repository/biocontainers/epic/status
   :target: https://quay.io/repository/biocontainers/epic
.. _`epic/tags`: https://quay.io/repository/biocontainers/epic?tab=tags


.. raw:: html

    <script>
        var package = "epic";
        var versions = ["0.2.12","0.2.12","0.2.12","0.2.12","0.2.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epic/README.html