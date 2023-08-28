:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barrnap-python'
.. highlight: bash

barrnap-python
==============

.. conda:recipe:: barrnap-python
   :replaces_section_title:
   :noindex:

   python package for Torsten Seemann\'s barrnap package for annotating rRNAs

   :homepage: https://github.com/nickp60/barrnap-python
   :license: GPL3 / GNU General Public License v3.0
   :recipe: /`barrnap-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barrnap-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barrnap-python/meta.yaml>`_

   Original Perl code can be found at the projects homepage here\: https\:\/\/github.com\/tseemann\/barrnap


.. conda:package:: barrnap-python

   |downloads_barrnap-python| |docker_barrnap-python|

   :versions:
      
      

      ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``

      

   
   :depends barrnap: ``>=0.8``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install barrnap-python

   and update with::

      mamba update barrnap-python

  To create a new environment, run::

      mamba create --name myenvname barrnap-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/barrnap-python:<tag>

   (see `barrnap-python/tags`_ for valid values for ``<tag>``)


.. |downloads_barrnap-python| image:: https://img.shields.io/conda/dn/bioconda/barrnap-python.svg?style=flat
   :target: https://anaconda.org/bioconda/barrnap-python
   :alt:   (downloads)
.. |docker_barrnap-python| image:: https://quay.io/repository/biocontainers/barrnap-python/status
   :target: https://quay.io/repository/biocontainers/barrnap-python
.. _`barrnap-python/tags`: https://quay.io/repository/biocontainers/barrnap-python?tab=tags


.. raw:: html

    <script>
        var package = "barrnap-python";
        var versions = ["0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barrnap-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barrnap-python/README.html