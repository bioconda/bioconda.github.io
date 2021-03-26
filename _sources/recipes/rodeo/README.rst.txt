:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rodeo'
.. highlight: bash

rodeo
=====

.. conda:recipe:: rodeo
   :replaces_section_title:
   :noindex:

   RODEO evaluates one or many genes\, characterizing a gene neighborhood based on the presence of profile hidden Markov models \(pHMMs\). Because RiPP precursor peptides are small and often evade annotation in sequence databases\, RODEO can also manually translate small ORFs \(open reading frames\). A combination of support vector machine \(SVM\) learning and motif analysis can be used to scan unannotated intergenic regions for RiPP precursors.

   :homepage: http://ripp.rodeo/index.html
   :license: AGPL
   :recipe: /`rodeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rodeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rodeo/meta.yaml>`_

   


.. conda:package:: rodeo

   |downloads_rodeo| |docker_rodeo|

   :versions:
      
      

      ``2.3.3-1``,  ``2.3.3-0``

      

   
   :depends biopython: 
   :depends hmmer: 
   :depends meme: 
   :depends numpy: 
   :depends python: ``>=3``
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rodeo

   and update with::

      conda update rodeo

   or use the docker container::

      docker pull quay.io/biocontainers/rodeo:<tag>

   (see `rodeo/tags`_ for valid values for ``<tag>``)


.. |downloads_rodeo| image:: https://img.shields.io/conda/dn/bioconda/rodeo.svg?style=flat
   :target: https://anaconda.org/bioconda/rodeo
   :alt:   (downloads)
.. |docker_rodeo| image:: https://quay.io/repository/biocontainers/rodeo/status
   :target: https://quay.io/repository/biocontainers/rodeo
.. _`rodeo/tags`: https://quay.io/repository/biocontainers/rodeo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rodeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rodeo/README.html