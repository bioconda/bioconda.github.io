:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ccqtl'
.. highlight: bash

r-ccqtl
=======

.. conda:recipe:: r-ccqtl
   :replaces_section_title:
   :noindex:

   CCQTL is a wrapper around the R\/qtl2 \(Broman et al\, Genetics 2019 10.1534\/genetics.118.301595\) functions\, with hard\-coded parameters tailored for QTL mapping in the Collaborative Cross.

   :homepage: https://gitlab.pasteur.fr/cc-qtl/ccqtl
   :license: GPL3 / GPL3
   :recipe: /`r-ccqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ccqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ccqtl/meta.yaml>`_

   


.. conda:package:: r-ccqtl

   |downloads_r-ccqtl| |docker_r-ccqtl|

   :versions:
      
      

      ``0.0.1_beta.2-1``,  ``0.0.1_beta.2-0``,  ``0.0.1_beta.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-argparse: ``>=2.2.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-gtools: 
   :depends r-qtl2: ``0.30``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ccqtl

   and update with::

      conda update r-ccqtl

   or use the docker container::

      docker pull quay.io/biocontainers/r-ccqtl:<tag>

   (see `r-ccqtl/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ccqtl| image:: https://img.shields.io/conda/dn/bioconda/r-ccqtl.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ccqtl
   :alt:   (downloads)
.. |docker_r-ccqtl| image:: https://quay.io/repository/biocontainers/r-ccqtl/status
   :target: https://quay.io/repository/biocontainers/r-ccqtl
.. _`r-ccqtl/tags`: https://quay.io/repository/biocontainers/r-ccqtl?tab=tags


.. raw:: html

    <script>
        var package = "r-ccqtl";
        var versions = ["0.0.1_beta.2","0.0.1_beta.2","0.0.1_beta.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ccqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ccqtl/README.html