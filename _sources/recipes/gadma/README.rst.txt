:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gadma'
.. highlight: bash

gadma
=====

.. conda:recipe:: gadma
   :replaces_section_title:
   :noindex:

   Genetic Algorithm for Demographic Inference

   :homepage: https://github.com/ctlab/GADMA
   :license: LGPL / GNU General Public (GPL)
   :recipe: /`gadma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gadma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gadma/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giaa005`

   


.. conda:package:: gadma

   |downloads_gadma| |docker_gadma|

   :versions:
      
      

      ``2.0.0rc16-0``

      

   
   :depends dadi: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends matplotlib-base: 
   :depends mpmath: 
   :depends nlopt: ``>=2.7.0,<2.7.1.0a0``
   :depends numpy: 
   :depends pandas: 
   :depends pillow: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends ruamel.yaml: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gadma

   and update with::

      conda update gadma

   or use the docker container::

      docker pull quay.io/biocontainers/gadma:<tag>

   (see `gadma/tags`_ for valid values for ``<tag>``)


.. |downloads_gadma| image:: https://img.shields.io/conda/dn/bioconda/gadma.svg?style=flat
   :target: https://anaconda.org/bioconda/gadma
   :alt:   (downloads)
.. |docker_gadma| image:: https://quay.io/repository/biocontainers/gadma/status
   :target: https://quay.io/repository/biocontainers/gadma
.. _`gadma/tags`: https://quay.io/repository/biocontainers/gadma?tab=tags


.. raw:: html

    <script>
        var package = "gadma";
        var versions = ["2.0.0rc16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gadma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gadma/README.html