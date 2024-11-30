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

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rodeo

   and update with::

      mamba update rodeo

  To create a new environment, run::

      mamba create --name myenvname rodeo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rodeo:<tag>

   (see `rodeo/tags`_ for valid values for ``<tag>``)


.. |downloads_rodeo| image:: https://img.shields.io/conda/dn/bioconda/rodeo.svg?style=flat
   :target: https://anaconda.org/bioconda/rodeo
   :alt:   (downloads)
.. |docker_rodeo| image:: https://quay.io/repository/biocontainers/rodeo/status
   :target: https://quay.io/repository/biocontainers/rodeo
.. _`rodeo/tags`: https://quay.io/repository/biocontainers/rodeo?tab=tags


.. raw:: html

    <script>
        var package = "rodeo";
        var versions = ["2.3.3","2.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rodeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rodeo/README.html