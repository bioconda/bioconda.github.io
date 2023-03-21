:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vembrane'
.. highlight: bash

vembrane
========

.. conda:recipe:: vembrane
   :replaces_section_title:
   :noindex:

   Filter VCF\/BCF files with Python expressions.

   :homepage: https://github.com/vembrane/vembrane
   :license: MIT
   :recipe: /`vembrane <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vembrane>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vembrane/meta.yaml>`_

   


.. conda:package:: vembrane

   |downloads_vembrane| |docker_vembrane|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.0-0</code>,  <code>0.13.2-0</code>,  <code>0.13.1-0</code>,  <code>0.13.0-0</code>,  <code>0.12.1-0</code>,  <code>0.12.0-0</code>,  <code>0.11.2-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  </span></summary>
      

      ``0.14.0-0``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends asttokens: ``>=2.0,<3.0``
   :depends intervaltree: ``>=3.0,<4.0``
   :depends numpy: ``>=1.23,<2.0``
   :depends pysam: ``>=0.20,<0.21``
   :depends python: ``>=3.8,<4``
   :depends pyyaml: ``>=6.0,<7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vembrane

   and update with::

      conda update vembrane

   or use the docker container::

      docker pull quay.io/biocontainers/vembrane:<tag>

   (see `vembrane/tags`_ for valid values for ``<tag>``)


.. |downloads_vembrane| image:: https://img.shields.io/conda/dn/bioconda/vembrane.svg?style=flat
   :target: https://anaconda.org/bioconda/vembrane
   :alt:   (downloads)
.. |docker_vembrane| image:: https://quay.io/repository/biocontainers/vembrane/status
   :target: https://quay.io/repository/biocontainers/vembrane
.. _`vembrane/tags`: https://quay.io/repository/biocontainers/vembrane?tab=tags


.. raw:: html

    <script>
        var package = "vembrane";
        var versions = ["0.14.0","0.13.2","0.13.1","0.13.0","0.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vembrane/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vembrane/README.html