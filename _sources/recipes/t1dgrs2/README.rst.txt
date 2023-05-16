:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 't1dgrs2'
.. highlight: bash

t1dgrs2
=======

.. conda:recipe:: t1dgrs2
   :replaces_section_title:
   :noindex:

   Generate a Type 1 Diabetes Genetic Risk Score that accounts for interactions between HLA\-DQ variants.

   :homepage: https://github.com/t2diabetesgenes/t1dgrs2
   :license: GPL / GPLv3
   :recipe: /`t1dgrs2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t1dgrs2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t1dgrs2/meta.yaml>`_

   


.. conda:package:: t1dgrs2

   |downloads_t1dgrs2| |docker_t1dgrs2|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends numpy: ``1.24.*``
   :depends pandas: ``1.5.*``
   :depends plink: 
   :depends python: ``>=3.11``
   :depends pyyaml: ``6.0.*``
   :depends scipy: ``1.10.*``
   :depends setuptools: ``67.6.*``
   :depends wheel: ``0.40.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install t1dgrs2

   and update with::

      conda update t1dgrs2

   or use the docker container::

      docker pull quay.io/biocontainers/t1dgrs2:<tag>

   (see `t1dgrs2/tags`_ for valid values for ``<tag>``)


.. |downloads_t1dgrs2| image:: https://img.shields.io/conda/dn/bioconda/t1dgrs2.svg?style=flat
   :target: https://anaconda.org/bioconda/t1dgrs2
   :alt:   (downloads)
.. |docker_t1dgrs2| image:: https://quay.io/repository/biocontainers/t1dgrs2/status
   :target: https://quay.io/repository/biocontainers/t1dgrs2
.. _`t1dgrs2/tags`: https://quay.io/repository/biocontainers/t1dgrs2?tab=tags


.. raw:: html

    <script>
        var package = "t1dgrs2";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t1dgrs2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t1dgrs2/README.html