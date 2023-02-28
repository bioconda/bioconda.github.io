:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'b2btools'
.. highlight: bash

b2btools
========

.. conda:recipe:: b2btools
   :replaces_section_title:
   :noindex:

   bio2Byte software suite to predict protein biophysical properties from their amino\-acid sequences

   :homepage: https://bio2byte.be/
   :documentation: https://bio2byte.be/b2btools/package-documentation
   
   :developer docs: https://pypi.org/project/b2bTools/
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`b2btools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/b2btools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/b2btools/meta.yaml>`_

   This package provides you with structural predictions for protein sequences made by the Bio2Byte group which researches the relation between protein sequence and biophysical behavior.
   List of available predictors\: 
     \- Dynamine\: Fast predictor of protein backbone dynamics using only sequence information as input. The version here also predicts side\-chain dynamics and secondary structure predictors using the same principle.
     \- Disomine\: Predicts protein disorder with recurrent neural networks not directly from the amino acid sequence\, but instead from more generic predictions of key biophysical properties\, here protein dynamics\, secondary structure\, and early folding.
     \- EfoldMine\: Predicts from the primary amino acid sequence of a protein\, which amino acids are likely involved in early folding events.
     \- AgMata\: Single\-sequence\-based predictor of protein regions that are likely to cause beta\-aggregation.



.. conda:package:: b2btools

   |downloads_b2btools| |docker_b2btools|

   :versions:
      
      

      ``3.0.5-0``,  ``3.0.4-0``

      

   
   :depends biopython: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends pillow: 
   :depends pomegranate: 
   :depends python: ``>3.6,<3.10``
   :depends pytorch: ``>=1.8.0``
   :depends pyyaml: 
   :depends requests: 
   :depends scikit-learn: ``>=1.0.1``
   :depends scipy: 
   :depends six: 
   :depends threadpoolctl: 
   :depends torchvision: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install b2btools

   and update with::

      conda update b2btools

   or use the docker container::

      docker pull quay.io/biocontainers/b2btools:<tag>

   (see `b2btools/tags`_ for valid values for ``<tag>``)


.. |downloads_b2btools| image:: https://img.shields.io/conda/dn/bioconda/b2btools.svg?style=flat
   :target: https://anaconda.org/bioconda/b2btools
   :alt:   (downloads)
.. |docker_b2btools| image:: https://quay.io/repository/biocontainers/b2btools/status
   :target: https://quay.io/repository/biocontainers/b2btools
.. _`b2btools/tags`: https://quay.io/repository/biocontainers/b2btools?tab=tags


.. raw:: html

    <script>
        var package = "b2btools";
        var versions = ["3.0.5","3.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/b2btools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/b2btools/README.html