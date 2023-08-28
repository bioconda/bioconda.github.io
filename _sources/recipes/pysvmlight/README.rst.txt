:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysvmlight'
.. highlight: bash

pysvmlight
==========

.. conda:recipe:: pysvmlight
   :replaces_section_title:
   :noindex:

   Interface to Thorsten Joachims\' SVM\-Light

   :homepage: https://bitbucket.org/wcauchois/pysvmlight
   :license: UNKNOWN
   :recipe: /`pysvmlight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysvmlight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysvmlight/meta.yaml>`_

   


.. conda:package:: pysvmlight

   |downloads_pysvmlight| |docker_pysvmlight|

   :versions:
      
      

      ``0.4-5``,  ``0.4-4``,  ``0.4-3``,  ``0.4-2``,  ``0.4-1``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
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

      mamba install pysvmlight

   and update with::

      mamba update pysvmlight

  To create a new environment, run::

      mamba create --name myenvname pysvmlight

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pysvmlight:<tag>

   (see `pysvmlight/tags`_ for valid values for ``<tag>``)


.. |downloads_pysvmlight| image:: https://img.shields.io/conda/dn/bioconda/pysvmlight.svg?style=flat
   :target: https://anaconda.org/bioconda/pysvmlight
   :alt:   (downloads)
.. |docker_pysvmlight| image:: https://quay.io/repository/biocontainers/pysvmlight/status
   :target: https://quay.io/repository/biocontainers/pysvmlight
.. _`pysvmlight/tags`: https://quay.io/repository/biocontainers/pysvmlight?tab=tags


.. raw:: html

    <script>
        var package = "pysvmlight";
        var versions = ["0.4","0.4","0.4","0.4","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysvmlight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysvmlight/README.html