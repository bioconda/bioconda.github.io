:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mcl'
.. highlight: bash

mcl
===

.. conda:recipe:: mcl
   :replaces_section_title:
   :noindex:

   MCL \- a cluster algorithm for graphs

   :homepage: http://micans.org/mcl/
   :license: GPL3
   :recipe: /`mcl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcl/meta.yaml>`_

   


.. conda:package:: mcl

   |downloads_mcl| |docker_mcl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>14.137-9</code>,  <code>14.137-8</code>,  <code>14.137-7</code>,  <code>14.137-6</code>,  <code>14.137-5</code>,  <code>14.137-4</code>,  <code>14.137-3</code>,  <code>14.137-2</code>,  <code>14.137-1</code>,  </span></summary>
      

      ``14.137-9``,  ``14.137-8``,  ``14.137-7``,  ``14.137-6``,  ``14.137-5``,  ``14.137-4``,  ``14.137-3``,  ``14.137-2``,  ``14.137-1``,  ``14.137-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mcl

   and update with::

      conda update mcl

   or use the docker container::

      docker pull quay.io/biocontainers/mcl:<tag>

   (see `mcl/tags`_ for valid values for ``<tag>``)


.. |downloads_mcl| image:: https://img.shields.io/conda/dn/bioconda/mcl.svg?style=flat
   :target: https://anaconda.org/bioconda/mcl
   :alt:   (downloads)
.. |docker_mcl| image:: https://quay.io/repository/biocontainers/mcl/status
   :target: https://quay.io/repository/biocontainers/mcl
.. _`mcl/tags`: https://quay.io/repository/biocontainers/mcl?tab=tags


.. raw:: html

    <script>
        var package = "mcl";
        var versions = ["14.137","14.137","14.137","14.137","14.137"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mcl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mcl/README.html