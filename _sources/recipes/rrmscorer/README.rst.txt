:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rrmscorer'
.. highlight: bash

rrmscorer
=========

.. conda:recipe:: rrmscorer
   :replaces_section_title:
   :noindex:

   RRMScorer \(RRM\-RNA score predictor\) predicts how likely a single RRM is to bind ssRNA

   :homepage: https://bio2byte.be/rrmscorer/
   :documentation: https://pypi.org/project/rrmscorer
   
   :developer docs: https://bitbucket.org/bio2byte/rrmscorer/
   :license: MIT / MIT
   :recipe: /`rrmscorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rrmscorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rrmscorer/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1010859`

   RRMScorer \(RRM\-RNA score predictor\) allows the user to easily predict
   how likely a single RRM is to bind ssRNA using a carefully generated
   alignment for the RRM structures in complex with RNA\, from which we
   analyzed the interaction patterns and derived the scores \(please
   address to the publication for more details on the method REF\).

   RRMScorer has several features to either calculate the binding score
   for a specific RRM and RNA sequences\, for a set of RRM sequences in a
   FASTA file\, or to explore which are the best RNA binders according to our scoring method.

   RRMScorer has been developed by Bio2Byte within the RNAct project. This project has received
   funding from the European Union\'s Horizon 2020 research and innovation programme under
   the Marie Skłodowska\-Curie grant agreement No. 813239.

   Wim Vranken\, Bio2Byte group within the RNAct project\, VUB\, Belgium.



.. conda:package:: rrmscorer

   |downloads_rrmscorer| |docker_rrmscorer|

   :versions:
      
      

      ``1.0.9-0``,  ``1.0.8-0``

      

   
   :depends biopython: 
   :depends hmmer: 
   :depends logomaker: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends requests: 
   :depends scikit-learn: 
   :depends seaborn: 
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

      mamba install rrmscorer

   and update with::

      mamba update rrmscorer

  To create a new environment, run::

      mamba create --name myenvname rrmscorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rrmscorer:<tag>

   (see `rrmscorer/tags`_ for valid values for ``<tag>``)


.. |downloads_rrmscorer| image:: https://img.shields.io/conda/dn/bioconda/rrmscorer.svg?style=flat
   :target: https://anaconda.org/bioconda/rrmscorer
   :alt:   (downloads)
.. |docker_rrmscorer| image:: https://quay.io/repository/biocontainers/rrmscorer/status
   :target: https://quay.io/repository/biocontainers/rrmscorer
.. _`rrmscorer/tags`: https://quay.io/repository/biocontainers/rrmscorer?tab=tags


.. raw:: html

    <script>
        var package = "rrmscorer";
        var versions = ["1.0.9","1.0.8"];
    </script>





Notes
-----
- More details are available from the publication related to this work. Please also reference this publication if you use this code\:
Roca\-Martínez J\, Dhondge H\, Sattler M\, Vranken WF \(2023\) Deciphering the RRM\-RNA recognition code\: A computational analysis.
PLOS Computational Biology 19\(1\)\: e1010859.


- DOI\: https\:\/\/doi.org\/10.1371\/journal.pcbi.1010859


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rrmscorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rrmscorer/README.html