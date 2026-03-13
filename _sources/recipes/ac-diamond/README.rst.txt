:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ac-diamond'
.. highlight: bash

ac-diamond
==========

.. conda:recipe:: ac-diamond
   :replaces_section_title:
   :noindex:

   AC\-DIAMOND is a DNA\-protein alignment tool

   :homepage: https://github.com/Maihj/AC-DIAMOND
   :license: GNU Affero General Public License v3.0
   :recipe: /`ac-diamond <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac-diamond>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac-diamond/meta.yaml>`_

   


.. conda:package:: ac-diamond

   |downloads_ac-diamond| |docker_ac-diamond|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on boost-cpp: ``>=1.82.0,<1.82.1.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``

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

    pixi global install ac-diamond

to add into an existing workspace instead, run::

    pixi add ac-diamond

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ac-diamond

Alternatively, to install into a new environment, run::

    conda create -n envname ac-diamond

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ac-diamond:<tag>

(see `ac-diamond/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ac-diamond| image:: https://img.shields.io/conda/dn/bioconda/ac-diamond.svg?style=flat
   :target: https://anaconda.org/bioconda/ac-diamond
   :alt:   (downloads)
.. |docker_ac-diamond| image:: https://quay.io/repository/biocontainers/ac-diamond/status
   :target: https://quay.io/repository/biocontainers/ac-diamond
.. _`ac-diamond/tags`: https://quay.io/repository/biocontainers/ac-diamond?tab=tags


.. raw:: html

    <script>
        var package = "ac-diamond";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ac-diamond/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ac-diamond/README.html