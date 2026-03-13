:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hitac'
.. highlight: bash

hitac
=====

.. conda:recipe:: hitac
   :replaces_section_title:
   :noindex:

   A hierarchical taxonomic classifier for fungal ITS sequences

   :homepage: https://gitlab.com/dacs-hpi/hitac
   :license: BSD / BSD-3-Clause
   :recipe: /`hitac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hitac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hitac/meta.yaml>`_
   :links: biotools: :biotools:`hitac`

   HiTaC is a software for hierarchical taxonomic classification
   for fungal ITS sequences. It is pure python code compatible with
   Python 3.8\+ and requires hiclass\, numpy\, pandas\, scikit\-bio and
   scikit\-learn.



.. conda:package:: hitac

   |downloads_hitac| |docker_hitac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2-1</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.30-0</code>,  <code>2.0.29-0</code>,  <code>2.0.28-0</code>,  </span></summary>
      

      ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.30-0``,  ``2.0.29-0``,  ``2.0.28-0``,  ``2.0.23-0``,  ``2.0.22-0``,  ``2.0.21-1``,  ``2.0.21-0``,  ``2.0.20-1``,  ``2.0.20-0``,  ``2.0.19-0``,  ``2.0.16-0``,  ``2.0.15-0``,  ``2.0.10-1``,  ``2.0.10-0``,  ``2.0.9-1``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.4-0``,  ``1.5.1-0``,  ``1.4-0``,  ``1.3-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on hiclass: ``4.13.3``
   :depends on numpy: ``>=1.22.3``
   :depends on pandas: ``>=1.4.3``
   :depends on python: ``>=3.9,<3.13``
   :depends on scikit-bio: ``>=0.5``
   :depends on scikit-learn: ``>=0.24,<1.5``

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

    pixi global install hitac

to add into an existing workspace instead, run::

    pixi add hitac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hitac

Alternatively, to install into a new environment, run::

    conda create -n envname hitac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hitac:<tag>

(see `hitac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hitac| image:: https://img.shields.io/conda/dn/bioconda/hitac.svg?style=flat
   :target: https://anaconda.org/bioconda/hitac
   :alt:   (downloads)
.. |docker_hitac| image:: https://quay.io/repository/biocontainers/hitac/status
   :target: https://quay.io/repository/biocontainers/hitac
.. _`hitac/tags`: https://quay.io/repository/biocontainers/hitac?tab=tags


.. raw:: html

    <script>
        var package = "hitac";
        var versions = ["2.2.2","2.2.2","2.2.1","2.2.0","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hitac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hitac/README.html