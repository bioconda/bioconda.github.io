:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lungcancerlines'
.. highlight: bash

bioconductor-lungcancerlines
============================

.. conda:recipe:: bioconductor-lungcancerlines
   :replaces_section_title:
   :noindex:

   Reads from Two Lung Cancer Cell Lines

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/LungCancerLines.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lungcancerlines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lungcancerlines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lungcancerlines/meta.yaml>`_

   Reads from an RNA\-seq experiment between two lung cancer cell lines\: H1993 \(met\) and H2073 \(primary\). The reads are stored as Fastq files and are meant for use with the TP53Genome object in the gmapR package.


.. conda:package:: bioconductor-lungcancerlines

   |downloads_bioconductor-lungcancerlines| |docker_bioconductor-lungcancerlines|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.36.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  <code>0.26.0-0</code>,  <code>0.24.0-0</code>,  <code>0.22.0-1</code>,  </span></summary>
      

      ``0.36.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221107``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lungcancerlines

   and update with::

      conda update bioconductor-lungcancerlines

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lungcancerlines:<tag>

   (see `bioconductor-lungcancerlines/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lungcancerlines| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lungcancerlines.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lungcancerlines
   :alt:   (downloads)
.. |docker_bioconductor-lungcancerlines| image:: https://quay.io/repository/biocontainers/bioconductor-lungcancerlines/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lungcancerlines
.. _`bioconductor-lungcancerlines/tags`: https://quay.io/repository/biocontainers/bioconductor-lungcancerlines?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lungcancerlines";
        var versions = ["0.36.0","0.32.0","0.32.0","0.30.0","0.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lungcancerlines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lungcancerlines/README.html