:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidmarkdown'
.. highlight: bash

r-acidmarkdown
==============

.. conda:recipe:: r-acidmarkdown
   :replaces_section_title:
   :noindex:

   Toolkit for extending the functionality of R Markdown.

   :homepage: https://r.acidgenomics.com/packages/acidmarkdown/
   :developer docs: https://github.com/acidgenomics/r-acidmarkdown
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidmarkdown <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidmarkdown>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidmarkdown/meta.yaml>`_

   


.. conda:package:: r-acidmarkdown

   |downloads_r-acidmarkdown| |docker_r-acidmarkdown|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.5-1</code>,  <code>0.2.5-0</code>,  <code>0.1.6-1</code>,  <code>0.1.6-0</code>,  <code>0.1.5-0</code>,  <code>0.1.4-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-0</code>,  <code>0.1.1-1</code>,  </span></summary>
      

      ``0.2.5-1``,  ``0.2.5-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-acidgenerics: ``>=0.6.4``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-goalie: ``>=0.6.6``
   :depends r-knitr: ``>=1.40``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-acidmarkdown

   and update with::

      conda update r-acidmarkdown

   or use the docker container::

      docker pull quay.io/biocontainers/r-acidmarkdown:<tag>

   (see `r-acidmarkdown/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidmarkdown| image:: https://img.shields.io/conda/dn/bioconda/r-acidmarkdown.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidmarkdown
   :alt:   (downloads)
.. |docker_r-acidmarkdown| image:: https://quay.io/repository/biocontainers/r-acidmarkdown/status
   :target: https://quay.io/repository/biocontainers/r-acidmarkdown
.. _`r-acidmarkdown/tags`: https://quay.io/repository/biocontainers/r-acidmarkdown?tab=tags


.. raw:: html

    <script>
        var package = "r-acidmarkdown";
        var versions = ["0.2.5","0.2.5","0.1.6","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidmarkdown/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidmarkdown/README.html