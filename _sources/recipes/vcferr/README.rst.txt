:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcferr'
.. highlight: bash

vcferr
======

.. conda:recipe:: vcferr
   :replaces_section_title:
   :noindex:

   Probabilistic VCF genotype error simulation

   :homepage: https://github.com/signaturescience/vcferr
   :license: MIT
   :recipe: /`vcferr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcferr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcferr/meta.yaml>`_

   


.. conda:package:: vcferr

   |downloads_vcferr| |docker_vcferr|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends click: 
   :depends pysam: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcferr

   and update with::

      conda update vcferr

   or use the docker container::

      docker pull quay.io/biocontainers/vcferr:<tag>

   (see `vcferr/tags`_ for valid values for ``<tag>``)


.. |downloads_vcferr| image:: https://img.shields.io/conda/dn/bioconda/vcferr.svg?style=flat
   :target: https://anaconda.org/bioconda/vcferr
   :alt:   (downloads)
.. |docker_vcferr| image:: https://quay.io/repository/biocontainers/vcferr/status
   :target: https://quay.io/repository/biocontainers/vcferr
.. _`vcferr/tags`: https://quay.io/repository/biocontainers/vcferr?tab=tags


.. raw:: html

    <script>
        var package = "vcferr";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcferr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcferr/README.html