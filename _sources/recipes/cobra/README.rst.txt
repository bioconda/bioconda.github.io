:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cobra'
.. highlight: bash

cobra
=====

.. conda:recipe:: cobra
   :replaces_section_title:
   :noindex:

   COBRApy is a package for constraint\-based modeling of biological networks.

   :homepage: https://opencobra.github.io/cobrapy
   :license: GNU Lesser General Public License v2 or later (LGPLv2+) or GNU General Public License v2 or later (GPLv2+)
   :recipe: /`cobra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra/meta.yaml>`_

   


.. conda:package:: cobra

   |downloads_cobra| |docker_cobra|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.21.0-1</code>,  <code>0.21.0-0</code>,  <code>0.20.0-0</code>,  <code>0.19.0-0</code>,  <code>0.18.1-1</code>,  <code>0.18.1-0</code>,  <code>0.17.1-0</code>,  <code>0.17.0-0</code>,  <code>0.16.0-0</code>,  </span></summary>
      

      ``0.21.0-1``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.1-1``,  ``0.18.1-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.4-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.4.0b6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on appdirs: ``>=1.4``
   :depends on depinfo: ``>=1.5.1``
   :depends on diskcache: ``>=5.0``
   :depends on future: 
   :depends on httpx: ``>=0.14``
   :depends on numpy: ``>=1.13``
   :depends on optlang: ``<1.4.6``
   :depends on pandas: ``>=1.0``
   :depends on pydantic: ``>=1.6``
   :depends on python: 
   :depends on python-libsbml: ``>=5.18.0``
   :depends on rich: ``>=6.0``
   :depends on ruamel.yaml: ``>=0.16``
   :depends on six: 
   :depends on swiglpk: ``>=4.65``
   :depends on tabulate: 

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

    pixi global install cobra

to add into an existing workspace instead, run::

    pixi add cobra

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cobra

Alternatively, to install into a new environment, run::

    conda create -n envname cobra

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cobra:<tag>

(see `cobra/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cobra| image:: https://img.shields.io/conda/dn/bioconda/cobra.svg?style=flat
   :target: https://anaconda.org/bioconda/cobra
   :alt:   (downloads)
.. |docker_cobra| image:: https://quay.io/repository/biocontainers/cobra/status
   :target: https://quay.io/repository/biocontainers/cobra
.. _`cobra/tags`: https://quay.io/repository/biocontainers/cobra?tab=tags


.. raw:: html

    <script>
        var package = "cobra";
        var versions = ["0.21.0","0.21.0","0.20.0","0.19.0","0.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cobra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cobra/README.html