:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fwdpy11'
.. highlight: bash

fwdpy11
=======

.. conda:recipe:: fwdpy11
   :replaces_section_title:
   :noindex:

   Forward\-time population genetic simulation in Python.

   :homepage: http://pypi.python.org/pypi/fwdpy11
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`fwdpy11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpy11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpy11/meta.yaml>`_

   


.. conda:package:: fwdpy11

   |downloads_fwdpy11| |docker_fwdpy11|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.21.0-0</code>,  <code>0.20.1-0</code>,  <code>0.20.0-2</code>,  <code>0.20.0-1</code>,  <code>0.20.0-0</code>,  <code>0.19.10-0</code>,  <code>0.19.9-0</code>,  <code>0.19.7-0</code>,  <code>0.19.6-0</code>,  </span></summary>
      

      ``0.21.0-0``,  ``0.20.1-0``,  ``0.20.0-2``,  ``0.20.0-1``,  ``0.20.0-0``,  ``0.19.10-0``,  ``0.19.9-0``,  ``0.19.7-0``,  ``0.19.6-0``,  ``0.19.3-0``,  ``0.19.2-0``,  ``0.19.1-0``,  ``0.18.3-0``,  ``0.18.2-0``,  ``0.18.1-0``,  ``0.17.1-2``,  ``0.17.1-1``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.2-0``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0-0``,  ``0.13.2-1``,  ``0.13.2-0``,  ``0.12.0-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3.post3-0``,  ``0.1.3.post1-0``,  ``0.1.3a1-0``,  ``0.1.3a0-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.post4-0``,  ``0.1.post2-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrs: 
   :depends black: 
   :depends demes: ``>=0.2``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends intervaltree: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.20``
   :depends numpy: ``>=1.25.2,<2.0a0``
   :depends openblas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends tskit: ``>=0.5``
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

      mamba install fwdpy11

   and update with::

      mamba update fwdpy11

  To create a new environment, run::

      mamba create --name myenvname fwdpy11

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fwdpy11:<tag>

   (see `fwdpy11/tags`_ for valid values for ``<tag>``)


.. |downloads_fwdpy11| image:: https://img.shields.io/conda/dn/bioconda/fwdpy11.svg?style=flat
   :target: https://anaconda.org/bioconda/fwdpy11
   :alt:   (downloads)
.. |docker_fwdpy11| image:: https://quay.io/repository/biocontainers/fwdpy11/status
   :target: https://quay.io/repository/biocontainers/fwdpy11
.. _`fwdpy11/tags`: https://quay.io/repository/biocontainers/fwdpy11?tab=tags


.. raw:: html

    <script>
        var package = "fwdpy11";
        var versions = ["0.21.0","0.20.1","0.20.0","0.20.0","0.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fwdpy11/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fwdpy11/README.html