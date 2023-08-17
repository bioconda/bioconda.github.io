:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfaffix'
.. highlight: bash

gfaffix
=======

.. conda:recipe:: gfaffix
   :replaces_section_title:
   :noindex:

   GFAffix identifies and collapses walk\-preserving shared affixes in variation graphs

   :homepage: https://github.com/marschall-lab/GFAffix
   :license: MIT
   :recipe: /`gfaffix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfaffix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfaffix/meta.yaml>`_

   


.. conda:package:: gfaffix

   |downloads_gfaffix| |docker_gfaffix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.5-0</code>,  <code>0.1.4-2</code>,  <code>0.1.4-1</code>,  <code>0.1.4-0</code>,  <code>0.1.3-1</code>,  <code>0.1.3-0</code>,  <code>0.1.2.5-1</code>,  <code>0.1.2.5-0</code>,  <code>0.1.2.4-0</code>,  </span></summary>
      

      ``0.1.5-0``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2.5-1``,  ``0.1.2.5-0``,  ``0.1.2.4-0``,  ``0.1.2.3-0``,  ``0.1.2.2-0``,  ``0.1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gfaffix

   and update with::

      conda update gfaffix

   or use the docker container::

      docker pull quay.io/biocontainers/gfaffix:<tag>

   (see `gfaffix/tags`_ for valid values for ``<tag>``)


.. |downloads_gfaffix| image:: https://img.shields.io/conda/dn/bioconda/gfaffix.svg?style=flat
   :target: https://anaconda.org/bioconda/gfaffix
   :alt:   (downloads)
.. |docker_gfaffix| image:: https://quay.io/repository/biocontainers/gfaffix/status
   :target: https://quay.io/repository/biocontainers/gfaffix
.. _`gfaffix/tags`: https://quay.io/repository/biocontainers/gfaffix?tab=tags


.. raw:: html

    <script>
        var package = "gfaffix";
        var versions = ["0.1.5","0.1.4","0.1.4","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfaffix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfaffix/README.html