:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngmaster'
.. highlight: bash

ngmaster
========

.. conda:recipe:: ngmaster
   :replaces_section_title:
   :noindex:

   In silico multi\-antigen sequence typing for N. gonorrhoeae \(NG\-MAST and NG\-STAR\).

   :homepage: https://github.com/MDU-PHL/ngmaster
   :documentation: https://github.com/MDU-PHL/ngmaster/blob/master/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`ngmaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmaster/meta.yaml>`_

   


.. conda:package:: ngmaster

   |downloads_ngmaster| |docker_ngmaster|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.0-0``,  ``0.5.8-1``,  ``0.5.8-0``

      

   
   :depends on biopython: 
   :depends on mlst: 
   :depends on python: ``>=3.12``
   :depends on requests: 

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

    pixi global install ngmaster

to add into an existing workspace instead, run::

    pixi add ngmaster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngmaster

Alternatively, to install into a new environment, run::

    conda create -n envname ngmaster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngmaster:<tag>

(see `ngmaster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngmaster| image:: https://img.shields.io/conda/dn/bioconda/ngmaster.svg?style=flat
   :target: https://anaconda.org/bioconda/ngmaster
   :alt:   (downloads)
.. |docker_ngmaster| image:: https://quay.io/repository/biocontainers/ngmaster/status
   :target: https://quay.io/repository/biocontainers/ngmaster
.. _`ngmaster/tags`: https://quay.io/repository/biocontainers/ngmaster?tab=tags


.. raw:: html

    <script>
        var package = "ngmaster";
        var versions = ["1.1.1","1.1.1","1.0.0","0.5.8","0.5.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngmaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngmaster/README.html