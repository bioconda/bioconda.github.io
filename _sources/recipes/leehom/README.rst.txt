:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'leehom'
.. highlight: bash

leehom
======

.. conda:recipe:: leehom
   :replaces_section_title:
   :noindex:

   Maximum\-likelihood adapter trimming and removal

   :homepage: https://grenaud.github.io/leeHom/
   :license: GPLv3
   :recipe: /`leehom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leehom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leehom/meta.yaml>`_

   


.. conda:package:: leehom

   |downloads_leehom| |docker_leehom|

   :versions:
      
      

      ``1.2.15-4``,  ``1.2.15-3``,  ``1.2.15-2``,  ``1.2.15-1``,  ``1.2.15-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends htslib: ``>=1.16,<1.17.0a0``
   :depends libgab: ``>=1.0.5``
   :depends libgab: ``>=1.0.5,<1.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install leehom

   and update with::

      conda update leehom

   or use the docker container::

      docker pull quay.io/biocontainers/leehom:<tag>

   (see `leehom/tags`_ for valid values for ``<tag>``)


.. |downloads_leehom| image:: https://img.shields.io/conda/dn/bioconda/leehom.svg?style=flat
   :target: https://anaconda.org/bioconda/leehom
   :alt:   (downloads)
.. |docker_leehom| image:: https://quay.io/repository/biocontainers/leehom/status
   :target: https://quay.io/repository/biocontainers/leehom
.. _`leehom/tags`: https://quay.io/repository/biocontainers/leehom?tab=tags


.. raw:: html

    <script>
        var package = "leehom";
        var versions = ["1.2.15","1.2.15","1.2.15","1.2.15","1.2.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/leehom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/leehom/README.html