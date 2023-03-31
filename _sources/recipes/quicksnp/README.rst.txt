:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quicksnp'
.. highlight: bash

quicksnp
========

.. conda:recipe:: quicksnp/1.0.1
   :replaces_section_title:
   :noindex:

   A python script to quickly build a Neighbor Joining tree using only a SNP distance matrix.

   :homepage: https://github.com/k-florek/QuickSNP
   :license: GPL / GPL-3
   :recipe: /`quicksnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksnp>`_/`1.0.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksnp/1.0.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksnp/1.0.1/meta.yaml>`_

   


.. conda:package:: quicksnp

   |downloads_quicksnp| |docker_quicksnp|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends numpy: ``>=1.22.4``
   :depends pandas: ``>=1.4.3``
   :depends python: ``>=3``
   :depends scikit-bio: ``0.5.7``
   :depends scipy: ``1.8.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quicksnp

   and update with::

      conda update quicksnp

   or use the docker container::

      docker pull quay.io/biocontainers/quicksnp:<tag>

   (see `quicksnp/tags`_ for valid values for ``<tag>``)


.. |downloads_quicksnp| image:: https://img.shields.io/conda/dn/bioconda/quicksnp.svg?style=flat
   :target: https://anaconda.org/bioconda/quicksnp
   :alt:   (downloads)
.. |docker_quicksnp| image:: https://quay.io/repository/biocontainers/quicksnp/status
   :target: https://quay.io/repository/biocontainers/quicksnp
.. _`quicksnp/tags`: https://quay.io/repository/biocontainers/quicksnp?tab=tags


.. raw:: html

    <script>
        var package = "quicksnp";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quicksnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quicksnp/README.html