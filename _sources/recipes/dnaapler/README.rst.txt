:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnaapler'
.. highlight: bash

dnaapler
========

.. conda:recipe:: dnaapler
   :replaces_section_title:
   :noindex:

   Reorients assembled microbial sequences

   :homepage: https://github.com/gbouras13/dnaapler
   :documentation: https://dnaapler.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`dnaapler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaapler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaapler/meta.yaml>`_

   


.. conda:package:: dnaapler

   |downloads_dnaapler| |docker_dnaapler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  </span></summary>
      

      ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.76``
   :depends on click: ``>=8.0.0``
   :depends on loguru: ``>=0.5.3``
   :depends on mmseqs2: ``>=13.45111``
   :depends on pandas: ``>=1.4.2``
   :depends on pyrodigal: ``>=3.0.0``
   :depends on python: ``>=3.8,<4.0``
   :depends on pyyaml: ``>=6.0``

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

    pixi global install dnaapler

to add into an existing workspace instead, run::

    pixi add dnaapler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dnaapler

Alternatively, to install into a new environment, run::

    conda create -n envname dnaapler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dnaapler:<tag>

(see `dnaapler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dnaapler| image:: https://img.shields.io/conda/dn/bioconda/dnaapler.svg?style=flat
   :target: https://anaconda.org/bioconda/dnaapler
   :alt:   (downloads)
.. |docker_dnaapler| image:: https://quay.io/repository/biocontainers/dnaapler/status
   :target: https://quay.io/repository/biocontainers/dnaapler
.. _`dnaapler/tags`: https://quay.io/repository/biocontainers/dnaapler?tab=tags


.. raw:: html

    <script>
        var package = "dnaapler";
        var versions = ["1.3.0","1.2.0","1.1.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnaapler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnaapler/README.html