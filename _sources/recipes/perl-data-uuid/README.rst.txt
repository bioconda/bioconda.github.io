:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-uuid'
.. highlight: bash

perl-data-uuid
==============

.. conda:recipe:: perl-data-uuid
   :replaces_section_title:
   :noindex:

   Globally\/Universally Unique Identifiers \(GUIDs\/UUIDs\).

   :homepage: https://metacpan.org/pod/Data::UUID
   :license: BSD
   :recipe: /`perl-data-uuid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-uuid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-uuid/meta.yaml>`_

   


.. conda:package:: perl-data-uuid

   |downloads_perl-data-uuid| |docker_perl-data-uuid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.227-1</code>,  <code>1.227-0</code>,  <code>1.226-4</code>,  <code>1.226-3</code>,  <code>1.226-2</code>,  <code>1.226-1</code>,  <code>1.226-0</code>,  <code>1.224-1</code>,  <code>1.224-0</code>,  </span></summary>
      

      ``1.227-1``,  ``1.227-0``,  ``1.226-4``,  ``1.226-3``,  ``1.226-2``,  ``1.226-1``,  ``1.226-0``,  ``1.224-1``,  ``1.224-0``,  ``1.221-5``,  ``1.221-4``,  ``1.221-3``,  ``1.221-2``,  ``1.221-1``,  ``1.221-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-digest-md5: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install perl-data-uuid

to add into an existing workspace instead, run::

    pixi add perl-data-uuid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-data-uuid

Alternatively, to install into a new environment, run::

    conda create -n envname perl-data-uuid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-data-uuid:<tag>

(see `perl-data-uuid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-data-uuid| image:: https://img.shields.io/conda/dn/bioconda/perl-data-uuid.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-uuid
   :alt:   (downloads)
.. |docker_perl-data-uuid| image:: https://quay.io/repository/biocontainers/perl-data-uuid/status
   :target: https://quay.io/repository/biocontainers/perl-data-uuid
.. _`perl-data-uuid/tags`: https://quay.io/repository/biocontainers/perl-data-uuid?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-uuid";
        var versions = ["1.227","1.227","1.226","1.226","1.226"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-uuid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-uuid/README.html