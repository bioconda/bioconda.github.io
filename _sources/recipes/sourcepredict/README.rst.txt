:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sourcepredict'
.. highlight: bash

sourcepredict
=============

.. conda:recipe:: sourcepredict
   :replaces_section_title:
   :noindex:

   Classification and prediction of the origin of metagenomic samples

   :homepage: https://github.com/maxibor/sourcepredict
   :license: GPL-3.0-or-later
   :recipe: /`sourcepredict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourcepredict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourcepredict/meta.yaml>`_

   


.. conda:package:: sourcepredict

   |downloads_sourcepredict| |docker_sourcepredict|

   :versions:
      
      

      ``0.5-0``

      

   
   :depends ete3: ``>=3.1.1``
   :depends numpy: ``<1.24.0``
   :depends pandas: ``>=0.24.1``
   :depends python: ``>=3.6``
   :depends scikit-bio: ``>=0.5.5``
   :depends scikit-learn: ``>=0.20.1``
   :depends scipy: ``>=1.1.0``
   :depends umap-learn: ``>=0.3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sourcepredict

   and update with::

      conda update sourcepredict

   or use the docker container::

      docker pull quay.io/biocontainers/sourcepredict:<tag>

   (see `sourcepredict/tags`_ for valid values for ``<tag>``)


.. |downloads_sourcepredict| image:: https://img.shields.io/conda/dn/bioconda/sourcepredict.svg?style=flat
   :target: https://anaconda.org/bioconda/sourcepredict
   :alt:   (downloads)
.. |docker_sourcepredict| image:: https://quay.io/repository/biocontainers/sourcepredict/status
   :target: https://quay.io/repository/biocontainers/sourcepredict
.. _`sourcepredict/tags`: https://quay.io/repository/biocontainers/sourcepredict?tab=tags


.. raw:: html

    <script>
        var package = "sourcepredict";
        var versions = ["0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sourcepredict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sourcepredict/README.html