:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ipapy2'
.. highlight: bash

ipapy2
======

.. conda:recipe:: ipapy2
   :replaces_section_title:
   :noindex:

   Integrated Probabilistic Annotation \(IPA\) 2.0 \- Python implementation

   :homepage: https://github.com/francescodc87/ipaPy2
   :license: MIT
   :recipe: /`ipapy2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipapy2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipapy2/meta.yaml>`_

   


.. conda:package:: ipapy2

   |downloads_ipapy2| |docker_ipapy2|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :depends molmass: ``>=2021.6.18``
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends scipy: ``>=1.8.1``
   :depends tqdm: ``>=4.64.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ipapy2

   and update with::

      conda update ipapy2

   or use the docker container::

      docker pull quay.io/biocontainers/ipapy2:<tag>

   (see `ipapy2/tags`_ for valid values for ``<tag>``)


.. |downloads_ipapy2| image:: https://img.shields.io/conda/dn/bioconda/ipapy2.svg?style=flat
   :target: https://anaconda.org/bioconda/ipapy2
   :alt:   (downloads)
.. |docker_ipapy2| image:: https://quay.io/repository/biocontainers/ipapy2/status
   :target: https://quay.io/repository/biocontainers/ipapy2
.. _`ipapy2/tags`: https://quay.io/repository/biocontainers/ipapy2?tab=tags


.. raw:: html

    <script>
        var package = "ipapy2";
        var versions = ["1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ipapy2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ipapy2/README.html