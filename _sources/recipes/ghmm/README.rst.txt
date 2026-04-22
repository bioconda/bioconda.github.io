:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ghmm'
.. highlight: bash

ghmm
====

.. conda:recipe:: ghmm
   :replaces_section_title:
   :noindex:

   General Hidden Markov Model library \(GHMM\) is a freely available C library implementing efficient data structures and algorithms for basic and extended HMMs with discrete and continous emissions

   :homepage: http://ghmm.org/
   :license: GPL2
   :recipe: /`ghmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghmm/meta.yaml>`_

   


.. conda:package:: ghmm

   |downloads_ghmm| |docker_ghmm|

   :versions:
      
      

      ``0.9-2``,  ``0.9-1``,  ``0.9-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libxml2: ``>=2.9.14,<2.10.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on swig: 

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

    pixi global install ghmm

to add into an existing workspace instead, run::

    pixi add ghmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ghmm

Alternatively, to install into a new environment, run::

    conda create -n envname ghmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ghmm:<tag>

(see `ghmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ghmm| image:: https://img.shields.io/conda/dn/bioconda/ghmm.svg?style=flat
   :target: https://anaconda.org/bioconda/ghmm
   :alt:   (downloads)
.. |docker_ghmm| image:: https://quay.io/repository/biocontainers/ghmm/status
   :target: https://quay.io/repository/biocontainers/ghmm
.. _`ghmm/tags`: https://quay.io/repository/biocontainers/ghmm?tab=tags


.. raw:: html

    <script>
        var package = "ghmm";
        var versions = ["0.9","0.9","0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghmm/README.html