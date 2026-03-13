:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cromshell'
.. highlight: bash

cromshell
=========

.. conda:recipe:: cromshell
   :replaces_section_title:
   :noindex:

   Command\-line interface to the Cromwell workflow manager

   :homepage: https://github.com/broadinstitute/cromshell
   :license: BSD / BSD-3-Clause
   :recipe: /`cromshell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromshell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromshell/meta.yaml>`_

   


.. conda:package:: cromshell

   |downloads_cromshell| |docker_cromshell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.0-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-1</code>,  </span></summary>
      

      ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.12-0``,  ``0.3.11-0``,  ``0.3.10-1``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.6-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: ``>=8``
   :depends on gcsfs: ``>=2022.3.0``
   :depends on google-cloud-bigquery: ``>=3.5.0``
   :depends on jq: 
   :depends on pygments: ``>=2.12.0``
   :depends on python: ``>=3``
   :depends on requests: ``>=2.27.1``
   :depends on tabulate: ``>=0.8.9``
   :depends on termcolor: ``>=1.1.0``
   :depends on womtool: 

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

    pixi global install cromshell

to add into an existing workspace instead, run::

    pixi add cromshell

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cromshell

Alternatively, to install into a new environment, run::

    conda create -n envname cromshell

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cromshell:<tag>

(see `cromshell/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cromshell| image:: https://img.shields.io/conda/dn/bioconda/cromshell.svg?style=flat
   :target: https://anaconda.org/bioconda/cromshell
   :alt:   (downloads)
.. |docker_cromshell| image:: https://quay.io/repository/biocontainers/cromshell/status
   :target: https://quay.io/repository/biocontainers/cromshell
.. _`cromshell/tags`: https://quay.io/repository/biocontainers/cromshell?tab=tags


.. raw:: html

    <script>
        var package = "cromshell";
        var versions = ["2.1.1","2.1.0","2.0.0","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cromshell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cromshell/README.html