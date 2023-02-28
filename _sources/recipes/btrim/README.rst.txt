:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'btrim'
.. highlight: bash

btrim
=====

.. conda:recipe:: btrim
   :replaces_section_title:
   :noindex:

   This tool is made to remove \"tips\" \(short dead ends\) from a compacted de Bruijn graph and more generally to remove sequencing errors. Used in Bcool a short read corrector \(https\:\/\/arxiv.org\/abs\/1711.03336\)

   :homepage: https://github.com/Malfoy/BTRIM
   :license: AGPL-3.0
   :recipe: /`btrim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btrim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btrim/meta.yaml>`_

   


.. conda:package:: btrim

   |downloads_btrim| |docker_btrim|

   :versions:
      
      

      ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install btrim

   and update with::

      conda update btrim

   or use the docker container::

      docker pull quay.io/biocontainers/btrim:<tag>

   (see `btrim/tags`_ for valid values for ``<tag>``)


.. |downloads_btrim| image:: https://img.shields.io/conda/dn/bioconda/btrim.svg?style=flat
   :target: https://anaconda.org/bioconda/btrim
   :alt:   (downloads)
.. |docker_btrim| image:: https://quay.io/repository/biocontainers/btrim/status
   :target: https://quay.io/repository/biocontainers/btrim
.. _`btrim/tags`: https://quay.io/repository/biocontainers/btrim?tab=tags


.. raw:: html

    <script>
        var package = "btrim";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/btrim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/btrim/README.html