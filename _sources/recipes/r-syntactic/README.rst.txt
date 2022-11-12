:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-syntactic'
.. highlight: bash

r-syntactic
===========

.. conda:recipe:: r-syntactic
   :replaces_section_title:
   :noindex:

   Make syntactically valid names out of character vectors.

   :homepage: https://r.acidgenomics.com/packages/syntactic/
   :developer docs: https://github.com/acidgenomics/r-syntactic
   :license: GPL / AGPL-3
   :recipe: /`r-syntactic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-syntactic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-syntactic/meta.yaml>`_

   


.. conda:package:: r-syntactic

   |downloads_r-syntactic| |docker_r-syntactic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.3-1</code>,  <code>0.6.3-0</code>,  <code>0.5.2-1</code>,  <code>0.5.2-0</code>,  <code>0.5.0-0</code>,  <code>0.4.5-4</code>,  <code>0.4.5-3</code>,  <code>0.4.5-2</code>,  <code>0.4.5-0</code>,  </span></summary>
      

      ``0.6.3-1``,  ``0.6.3-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.0-0``,  ``0.4.5-4``,  ``0.4.5-3``,  ``0.4.5-2``,  ``0.4.5-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.10-0``,  ``0.3.9-1``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.5-0``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-acidbase: ``>=0.6.8``
   :depends r-acidcli: ``>=0.2.4``
   :depends r-acidgenerics: ``>=0.6.4``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-goalie: ``>=0.6.6``
   :depends r-stringi: ``>=1.7.8``
   :depends r-stringr: ``>=1.4.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-syntactic

   and update with::

      conda update r-syntactic

   or use the docker container::

      docker pull quay.io/biocontainers/r-syntactic:<tag>

   (see `r-syntactic/tags`_ for valid values for ``<tag>``)


.. |downloads_r-syntactic| image:: https://img.shields.io/conda/dn/bioconda/r-syntactic.svg?style=flat
   :target: https://anaconda.org/bioconda/r-syntactic
   :alt:   (downloads)
.. |docker_r-syntactic| image:: https://quay.io/repository/biocontainers/r-syntactic/status
   :target: https://quay.io/repository/biocontainers/r-syntactic
.. _`r-syntactic/tags`: https://quay.io/repository/biocontainers/r-syntactic?tab=tags


.. raw:: html

    <script>
        var package = "r-syntactic";
        var versions = ["0.6.3","0.6.3","0.5.2","0.5.2","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-syntactic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-syntactic/README.html