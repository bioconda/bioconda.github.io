:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hlafreq'
.. highlight: bash

hlafreq
=======

.. conda:recipe:: hlafreq
   :replaces_section_title:
   :noindex:

   Download and combine HLA frequency data from multiple studies.

   :homepage: https://github.com/Vaccitech/HLAfreq
   :license: MIT / MIT
   :recipe: /`hlafreq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlafreq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlafreq/meta.yaml>`_

   


.. conda:package:: hlafreq

   |downloads_hlafreq| |docker_hlafreq|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends on arviz: 
   :depends on bs4: 
   :depends on matplotlib-base: ``>=3.6.0``
   :depends on numpy: ``>=1.24.0``
   :depends on pandas: 
   :depends on pymc: ``>=3``
   :depends on python: ``>=3.10``
   :depends on requests: 
   :depends on scipy: ``>=1.10.0``

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

    pixi global install hlafreq

to add into an existing workspace instead, run::

    pixi add hlafreq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hlafreq

Alternatively, to install into a new environment, run::

    conda create -n envname hlafreq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hlafreq:<tag>

(see `hlafreq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hlafreq| image:: https://img.shields.io/conda/dn/bioconda/hlafreq.svg?style=flat
   :target: https://anaconda.org/bioconda/hlafreq
   :alt:   (downloads)
.. |docker_hlafreq| image:: https://quay.io/repository/biocontainers/hlafreq/status
   :target: https://quay.io/repository/biocontainers/hlafreq
.. _`hlafreq/tags`: https://quay.io/repository/biocontainers/hlafreq?tab=tags


.. raw:: html

    <script>
        var package = "hlafreq";
        var versions = ["0.0.5","0.0.4","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hlafreq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hlafreq/README.html