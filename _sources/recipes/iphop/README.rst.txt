:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iphop'
.. highlight: bash

iphop
=====

.. conda:recipe:: iphop
   :replaces_section_title:
   :noindex:

   Predict host genus from genomes of uncultivated phages.

   :homepage: https://bitbucket.org/srouxjgi/iphop/
   :license: GPL / Modified GPL v3
   :recipe: /`iphop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iphop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iphop/meta.yaml>`_

   


.. conda:package:: iphop

   |downloads_iphop| |docker_iphop|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``1.79.*``
   :depends blast: ``2.12.*``
   :depends click: ``8.0.*``
   :depends crisper_recognition_tool: ``1.2.*``
   :depends diamond: ``2.0.*``
   :depends hmmer: ``3.3.2.*``
   :depends joblib: ``1.0.*``
   :depends numpy: ``1.23.*``
   :depends pandas: ``1.3.*``
   :depends perl: ``<6``
   :depends perl-bioperl: ``<=1.7``
   :depends piler-cr: ``1.06.*``
   :depends prodigal: ``2.6.*``
   :depends python: ``3.8.*``
   :depends r-base: ``4.0.*``
   :depends r-ranger: ``0.13.*``
   :depends scikit-learn: ``0.22.*``
   :depends tensorflow: ``2.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install iphop

   and update with::

      conda update iphop

   or use the docker container::

      docker pull quay.io/biocontainers/iphop:<tag>

   (see `iphop/tags`_ for valid values for ``<tag>``)


.. |downloads_iphop| image:: https://img.shields.io/conda/dn/bioconda/iphop.svg?style=flat
   :target: https://anaconda.org/bioconda/iphop
   :alt:   (downloads)
.. |docker_iphop| image:: https://quay.io/repository/biocontainers/iphop/status
   :target: https://quay.io/repository/biocontainers/iphop
.. _`iphop/tags`: https://quay.io/repository/biocontainers/iphop?tab=tags


.. raw:: html

    <script>
        var package = "iphop";
        var versions = ["1.3.0","1.2.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iphop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iphop/README.html