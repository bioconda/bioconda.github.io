:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hap-ibd'
.. highlight: bash

hap-ibd
=======

.. conda:recipe:: hap-ibd
   :replaces_section_title:
   :noindex:

   Hap\-ibd Detects identity\-by\-descent \(IBD\) segments and homozygosity\-by\-descent \(HBD\) segments in phased genotype data.

   :homepage: https://github.com/browning-lab/hap-ibd
   :documentation: https://github.com/browning-lab/hap-ibd/blob/master/README.md
   
   :license: Apache-2.0
   :recipe: /`hap-ibd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hap-ibd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hap-ibd/meta.yaml>`_
   :links: biotools: :biotools:`hap-ibd`, doi: :doi:`10.1016/j.ajhg.2020.02.010`

   


.. conda:package:: hap-ibd

   |downloads_hap-ibd| |docker_hap-ibd|

   :versions:
      
      

      ``1.0.rev20May22.818-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hap-ibd

   and update with::

      conda update hap-ibd

   or use the docker container::

      docker pull quay.io/biocontainers/hap-ibd:<tag>

   (see `hap-ibd/tags`_ for valid values for ``<tag>``)


.. |downloads_hap-ibd| image:: https://img.shields.io/conda/dn/bioconda/hap-ibd.svg?style=flat
   :target: https://anaconda.org/bioconda/hap-ibd
   :alt:   (downloads)
.. |docker_hap-ibd| image:: https://quay.io/repository/biocontainers/hap-ibd/status
   :target: https://quay.io/repository/biocontainers/hap-ibd
.. _`hap-ibd/tags`: https://quay.io/repository/biocontainers/hap-ibd?tab=tags


.. raw:: html

    <script>
        var package = "hap-ibd";
        var versions = ["1.0.rev20May22.818"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hap-ibd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hap-ibd/README.html