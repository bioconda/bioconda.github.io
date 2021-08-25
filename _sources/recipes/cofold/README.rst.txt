:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cofold'
.. highlight: bash

cofold
======

.. conda:recipe:: cofold
   :replaces_section_title:
   :noindex:

   An RNA secondary structure prediction method that takes co\-transcriptional folding into account.

   :homepage: http://www.e-rna.org/cofold/
   :license: MIT-like
   :recipe: /`cofold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cofold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cofold/meta.yaml>`_

   


.. conda:package:: cofold

   |downloads_cofold| |docker_cofold|

   :versions:
      
      

      ``2.0.4-4``,  ``2.0.4-3``,  ``2.0.4-2``,  ``2.0.4-1``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cofold

   and update with::

      conda update cofold

   or use the docker container::

      docker pull quay.io/biocontainers/cofold:<tag>

   (see `cofold/tags`_ for valid values for ``<tag>``)


.. |downloads_cofold| image:: https://img.shields.io/conda/dn/bioconda/cofold.svg?style=flat
   :target: https://anaconda.org/bioconda/cofold
   :alt:   (downloads)
.. |docker_cofold| image:: https://quay.io/repository/biocontainers/cofold/status
   :target: https://quay.io/repository/biocontainers/cofold
.. _`cofold/tags`: https://quay.io/repository/biocontainers/cofold?tab=tags


.. raw:: html

    <script>
        var package = "cofold";
        var versions = ["2.0.4","2.0.4","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cofold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cofold/README.html