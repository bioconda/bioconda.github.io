:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastmlst'
.. highlight: bash

fastmlst
========

.. conda:recipe:: fastmlst
   :replaces_section_title:
   :noindex:

   A Fast Multilocus Sequence Typing scan against PubMLST typing schemes.

   :homepage: https://github.com/EnzoAndree/FastMLST
   :license: LGPL / LGPL-3.0-only
   :recipe: /`fastmlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastmlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastmlst/meta.yaml>`_

   


.. conda:package:: fastmlst

   |downloads_fastmlst| |docker_fastmlst|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.19-0</code>,  <code>0.0.16-0</code>,  <code>0.0.15-0</code>,  <code>0.0.14-0</code>,  <code>0.0.13-0</code>,  <code>0.0.12-0</code>,  <code>0.0.11-0</code>,  <code>0.0.10-0</code>,  <code>0.0.9-0</code>,  </span></summary>
      

      ``0.0.19-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on pandas: 
   :depends on python: ``>=3``
   :depends on tqdm: 

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

    pixi global install fastmlst

to add into an existing workspace instead, run::

    pixi add fastmlst

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastmlst

Alternatively, to install into a new environment, run::

    conda create -n envname fastmlst

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastmlst:<tag>

(see `fastmlst/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastmlst| image:: https://img.shields.io/conda/dn/bioconda/fastmlst.svg?style=flat
   :target: https://anaconda.org/bioconda/fastmlst
   :alt:   (downloads)
.. |docker_fastmlst| image:: https://quay.io/repository/biocontainers/fastmlst/status
   :target: https://quay.io/repository/biocontainers/fastmlst
.. _`fastmlst/tags`: https://quay.io/repository/biocontainers/fastmlst?tab=tags


.. raw:: html

    <script>
        var package = "fastmlst";
        var versions = ["0.0.19","0.0.16","0.0.15","0.0.14","0.0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastmlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastmlst/README.html