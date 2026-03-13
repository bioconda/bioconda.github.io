:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clan'
.. highlight: bash

clan
====

.. conda:recipe:: clan
   :replaces_section_title:
   :noindex:

   CLAN \- the CrossLinked reads ANalysis tool

   :homepage: https://sourceforge.net/projects/clan-mapping/
   :license: Creative Commons BY-NC-ND 4.0 license
   :recipe: /`clan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clan/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.isci.2019.05.038`

   


.. conda:package:: clan

   |downloads_clan| |docker_clan|

   :versions:
      
      

      ``0.05-4``,  ``0.05-3``,  ``0.05-2``,  ``0.05-1``,  ``0.05-0``

      

   
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

    pixi global install clan

to add into an existing workspace instead, run::

    pixi add clan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clan

Alternatively, to install into a new environment, run::

    conda create -n envname clan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clan:<tag>

(see `clan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clan| image:: https://img.shields.io/conda/dn/bioconda/clan.svg?style=flat
   :target: https://anaconda.org/bioconda/clan
   :alt:   (downloads)
.. |docker_clan| image:: https://quay.io/repository/biocontainers/clan/status
   :target: https://quay.io/repository/biocontainers/clan
.. _`clan/tags`: https://quay.io/repository/biocontainers/clan?tab=tags


.. raw:: html

    <script>
        var package = "clan";
        var versions = ["0.05","0.05","0.05","0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clan/README.html