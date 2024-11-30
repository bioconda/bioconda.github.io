:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maxentscan'
.. highlight: bash

maxentscan
==========

.. conda:recipe:: maxentscan
   :replaces_section_title:
   :noindex:

   MaxEntScan is based on the approach for modeling the sequences of short sequence motifs such as those involved in RNA splicing which simultaneously accounts for non\-adjacent as well as adjacent dependencies between positions. This method is based on the \'Maximum Entropy Principle\' and generalizes most previous probabilistic models of sequence motifs such as weight matrix models and inhomogeneous Markov models.

   :homepage: http://genes.mit.edu/burgelab/maxent/Xmaxentscan_scoreseq.html
   :license: unknown
   :recipe: /`maxentscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxentscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxentscan/meta.yaml>`_

   


.. conda:package:: maxentscan

   |downloads_maxentscan| |docker_maxentscan|

   :versions:
      
      

      ``0_2004.04.21-4``,  ``0_2004.04.21-3``,  ``0_2004.04.21-2``,  ``0_2004.04.21-1``,  ``0_2004.04.21-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install maxentscan

   and update with::

      mamba update maxentscan

  To create a new environment, run::

      mamba create --name myenvname maxentscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maxentscan:<tag>

   (see `maxentscan/tags`_ for valid values for ``<tag>``)


.. |downloads_maxentscan| image:: https://img.shields.io/conda/dn/bioconda/maxentscan.svg?style=flat
   :target: https://anaconda.org/bioconda/maxentscan
   :alt:   (downloads)
.. |docker_maxentscan| image:: https://quay.io/repository/biocontainers/maxentscan/status
   :target: https://quay.io/repository/biocontainers/maxentscan
.. _`maxentscan/tags`: https://quay.io/repository/biocontainers/maxentscan?tab=tags


.. raw:: html

    <script>
        var package = "maxentscan";
        var versions = ["0_2004.04.21","0_2004.04.21","0_2004.04.21","0_2004.04.21","0_2004.04.21"];
    </script>





Notes
-----
Due to the generic name of the included scripts\, \"maxentscan\_\" has been prefixed all executables\, e.g. score3.pl can be called as maxentscan\_score3.pl.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maxentscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maxentscan/README.html