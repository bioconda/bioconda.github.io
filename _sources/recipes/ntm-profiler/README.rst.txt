:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntm-profiler'
.. highlight: bash

ntm-profiler
============

.. conda:recipe:: ntm-profiler
   :replaces_section_title:
   :noindex:

   Profiling tool for NTM to detect species and resistance from WGS data

   :homepage: https://github.com/jodyphelan/NTM-Profiler
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ntm-profiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntm-profiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntm-profiler/meta.yaml>`_

   


.. conda:package:: ntm-profiler

   |downloads_ntm-profiler| |docker_ntm-profiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.0-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-0</code>,  </span></summary>
      

      ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on jinja2: 
   :depends on pathogen-profiler: ``5.1.0.*``
   :depends on python: ``>=3.7``
   :depends on sourmash: ``>=4.8.3``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install ntm-profiler

to add into an existing workspace instead, run::

    pixi add ntm-profiler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ntm-profiler

Alternatively, to install into a new environment, run::

    conda create -n envname ntm-profiler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ntm-profiler:<tag>

(see `ntm-profiler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ntm-profiler| image:: https://img.shields.io/conda/dn/bioconda/ntm-profiler.svg?style=flat
   :target: https://anaconda.org/bioconda/ntm-profiler
   :alt:   (downloads)
.. |docker_ntm-profiler| image:: https://quay.io/repository/biocontainers/ntm-profiler/status
   :target: https://quay.io/repository/biocontainers/ntm-profiler
.. _`ntm-profiler/tags`: https://quay.io/repository/biocontainers/ntm-profiler?tab=tags


.. raw:: html

    <script>
        var package = "ntm-profiler";
        var versions = ["0.8.1","0.8.0","0.7.0","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntm-profiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntm-profiler/README.html