:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bialign'
.. highlight: bash

bialign
=======

.. conda:recipe:: bialign
   :replaces_section_title:
   :noindex:

   Bialignment of RNAs and proteins

   :homepage: https://github.com/s-will/BiAlign
   :documentation: https://pypi.org/project/bialign/
   
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`bialign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bialign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bialign/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-030-63061-4_15`

   


.. conda:package:: bialign

   |downloads_bialign| |docker_bialign|

   :versions:
      
      

      ``0.3-0``,  ``0.3b5-0``,  ``0.3b4-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bialign

   and update with::

      conda update bialign

   or use the docker container::

      docker pull quay.io/biocontainers/bialign:<tag>

   (see `bialign/tags`_ for valid values for ``<tag>``)


.. |downloads_bialign| image:: https://img.shields.io/conda/dn/bioconda/bialign.svg?style=flat
   :target: https://anaconda.org/bioconda/bialign
   :alt:   (downloads)
.. |docker_bialign| image:: https://quay.io/repository/biocontainers/bialign/status
   :target: https://quay.io/repository/biocontainers/bialign
.. _`bialign/tags`: https://quay.io/repository/biocontainers/bialign?tab=tags


.. raw:: html

    <script>
        var package = "bialign";
        var versions = ["0.3","0.3b5","0.3b4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bialign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bialign/README.html