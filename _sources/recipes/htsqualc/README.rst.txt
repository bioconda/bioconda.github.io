:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htsqualc'
.. highlight: bash

htsqualc
========

.. conda:recipe:: htsqualc
   :replaces_section_title:
   :noindex:

   HTSQualC is an automated quality control analysis tool for a single and paired\-end high\-throughput sequencing data \(HTS\)

   :homepage: https://reneshbedre.github.io/blog/htseqqc.html
   :license: MIT
   :recipe: /`htsqualc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsqualc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsqualc/meta.yaml>`_

   


.. conda:package:: htsqualc

   |downloads_htsqualc| |docker_htsqualc|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pysam: 
   :depends python: 
   :depends termcolor: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install htsqualc

   and update with::

      conda update htsqualc

   or use the docker container::

      docker pull quay.io/biocontainers/htsqualc:<tag>

   (see `htsqualc/tags`_ for valid values for ``<tag>``)


.. |downloads_htsqualc| image:: https://img.shields.io/conda/dn/bioconda/htsqualc.svg?style=flat
   :target: https://anaconda.org/bioconda/htsqualc
   :alt:   (downloads)
.. |docker_htsqualc| image:: https://quay.io/repository/biocontainers/htsqualc/status
   :target: https://quay.io/repository/biocontainers/htsqualc
.. _`htsqualc/tags`: https://quay.io/repository/biocontainers/htsqualc?tab=tags


.. raw:: html

    <script>
        var package = "htsqualc";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htsqualc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htsqualc/README.html